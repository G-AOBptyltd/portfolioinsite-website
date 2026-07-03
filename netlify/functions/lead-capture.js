/**
 * lead-capture.js — Netlify Function
 * Writes PortfolioInSite website lead-capture form submissions straight into
 * the Contacts & Leads Notion database, bypassing Zapier's polling delay
 * and task quota entirely.
 *
 * Currently used by: the "jira-interest" register-interest form on
 * portfolioinsite-website/index.html (Atlassian Marketplace waitlist).
 * Reusable for any future lead form on this site — pass a different
 * `source` / `brand` in the request body.
 *
 * Fail-open: if Notion errors or the API key is missing, this still returns
 * 200 so the visitor sees a success message. The Netlify Forms submission
 * (fired in parallel by the browser) is the backup copy — see main.js.
 *
 * Required environment variable (Netlify dashboard → this site →
 * Project configuration → Environment variables → Production):
 *   NOTION_API_KEY — secret_... (Notion integration token; the integration
 *                    must be connected to the Contacts & Leads database via
 *                    ... → Connections in Notion)
 */

const CONTACTS_LEADS_DB_ID = 'ee4aaeda-8054-4dee-92e7-c32a724f9770';

const VALID_SOURCES = ['fact-waitlist', 'aob-contact', 'manual', 'portfolioinsite-jira-interest'];
const VALID_BRANDS = ['FACT', 'AOB Corporate', 'SprintINSite', 'PortfolioInSite'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const email = String(payload.email || '').trim();
  if (!EMAIL_PATTERN.test(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'A valid email is required' }) };
  }

  const source = VALID_SOURCES.includes(payload.source) ? payload.source : 'manual';
  const brand = VALID_BRANDS.includes(payload.brand) ? payload.brand : 'PortfolioInSite';
  const notes = String(
    payload.notes || 'Registered interest — PortfolioInSite Jira Forge app (Atlassian Marketplace review).'
  ).slice(0, 2000);

  if (!process.env.NOTION_API_KEY) {
    console.error('lead-capture: NOTION_API_KEY not set — lead NOT captured in Notion:', email, source);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, warning: 'Notion capture skipped — key not configured' }),
    };
  }

  const notionBody = {
    parent: { database_id: CONTACTS_LEADS_DB_ID },
    properties: {
      Name: { title: [{ text: { content: email } }] },
      Email: { email },
      Brand: { select: { name: brand } },
      Source: { select: { name: source } },
      Status: { select: { name: 'New' } },
      'Submission Date': { date: { start: new Date().toISOString().slice(0, 10) } },
      Notes: { rich_text: [{ text: { content: notes } }] },
    },
  };

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(notionBody),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('lead-capture: Notion create page failed:', response.status, errText);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, warning: 'Notion capture failed — check function logs' }),
      };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('lead-capture: unexpected error:', err);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, warning: 'Notion capture failed — check function logs' }),
    };
  }
};
