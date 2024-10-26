import { Client } from '@notionhq/client';
import type { DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: import.meta.env.NOTION_API_KEY,
});

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export async function getThoughts() {
  const response = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Live'
      }
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results.map(page => {
    const { properties } = page as any;
    return {
      title: properties.Title.title[0].plain_text,
      date: formatDate(properties.Date.date.start),
      categories: properties.Categories.multi_select.map((cat: any) => cat.name),
      href: `/thoughts/${properties.Slug.rich_text[0].plain_text}`
    };
  });
}
