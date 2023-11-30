import { test, expect } from '@playwright/test';

test.use({ actionTimeout: 5000 });

test('checkout', async ({ page }) => {
	// navigate to our target web page
	await page.goto('https://danube-web.shop/');

	// add the first item to the cart
	await page.getByText('Haben oder haben Fric Eromm ★★★★☆ $9.95').click();
	await page.getByRole('button', { name: 'Add to cart' }).click();

	// navigate to cart and proceed
	await page.getByRole('button', { name: 'Checkout' }).click();

	// fill out checkout info
	await page.getByPlaceholder('Name', { exact: true }).fill('Max');
	await page.getByPlaceholder('Surname').fill('Mustermann');
	await page.getByPlaceholder('Address').fill('Charlottenstr. 57');
	await page.getByPlaceholder('Zipcode').fill('10117');
	await page.getByPlaceholder('City').fill('Berlin');
	await page.getByPlaceholder('Company (optional)').fill('Firma GmbH');
	await page.getByLabel('as soon as possible').check();

	// confirm checkout
	await page.getByRole('button', { name: 'Buy' }).click();

	// wait until the order confirmation message is shown
	await expect(page.getByText('All good, order is on the way. Thank you!!')).toBeVisible();
});
