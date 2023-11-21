import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
	// navigate to our target web page
	await page.goto('https://danube-web.shop/');

	// click on the login button and go through the login procedure
	await page.getByRole('button', { name: 'Log in' }).click();
	await page.getByPlaceholder('Email').fill('user@email.com');
	await page.getByPlaceholder('Password').fill('supersecure1');
	await page.getByRole('button', { name: 'Sign in' }).click();

	// wait until the login confirmation message is shown
	await expect(page.getByText('Welcome back')).toBeVisible();
});
