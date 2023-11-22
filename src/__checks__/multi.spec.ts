import { test, expect } from '@playwright/test';

const headers = {
	Accept: 'application/json',
	Authorization: `Bearer ${process.env.JSONMAP_API_KEY}`,
};

test('login', async ({ request }) => {
	let itemList;
	let itemKey;

	await test.step('GET /api/v1/items', async () => {
		const response = await request.get(`https://jsonmap.site/api/v1/items`, { headers });
		itemList = await response.json();
		itemKey = await itemList[0].key;
	});

	await test.step('GET /api/v1/items', async () => {
        const item = await request.get(`https://jsonmap.site/api/v1/items/${itemKey}`, { headers });
	    expect(item).toBeOK();
    });

});
