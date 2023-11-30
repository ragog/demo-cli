import { test, expect } from '@playwright/test';

test.use({ actionTimeout: 5000 });

test('search', async ({ page }) => {
	const bookList = ['The Foreigner', 'The Transformation', 'For Whom the Ball Tells', 'Baiting for Robot'];

	// navigate to our target web page
	await page.goto('https://danube-web.shop/');

	// search for keyword
	await page.getByRole('textbox').fill('for');
	await page.getByRole('button', { name: 'Search' }).click();

	await page.waitForLoadState('networkidle');

	// halt immediately if results do not equal expected number
	let resultsNumber = (await page.$$('.preview-title')).length;
	expect(resultsNumber).toBe(bookList.length);

	// remove every element found from the original array...
	for (let i = 0; i < resultsNumber; i++) {
		const resultTitle = await page.$eval(`.preview:nth-child(${i + 1}) > .preview-title`, (e) => e.innerText);

		const index = bookList.indexOf(resultTitle);
		bookList.splice(index, 1);
	}

	// ...then assert that the original array is now empty
	expect(bookList.length).toBe(0);
});
