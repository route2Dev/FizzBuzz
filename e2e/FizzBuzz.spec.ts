import { test, expect } from '@playwright/test';

test('Does not display list when by default', async ({ page }) => {
  await page.goto('http://localhost:3000/fizz-buzz');

  await expect(page.getByTestId('input-display')).not.toBeVisible();
  await expect(page.getByTestId('results-list')).not.toBeVisible();
  
});

test('Displays list when input is submitted', async ({ page }) => {
  await page.goto('http://localhost:3000/fizz-buzz');
  await page.getByLabel(/Enter an Array of Values/i).fill('1,21,15,45,,a');

  const button = page.getByTestId('fizz-buzz-submit');
  
  await button.click();
  
  await expect(page.getByTestId('input-display')).toBeVisible();
  await expect(page.getByTestId('results-list')).toBeVisible();
});

test('Displays correct values when parsing input', async ({ page }) => {
  await page.goto('http://localhost:3000/fizz-buzz');
  await page.getByLabel(/Enter an Array of Values/i).fill('1,21,15,45,,a');

  const button = page.getByTestId('fizz-buzz-submit');
  
  await button.click();

  await expect(page.getByText('Divided 1 by 3')).toBeVisible();
  await expect(page.getByText('Divided 1 by 5')).toBeVisible();
  await expect(page.getByText('<empty>')).toBeVisible();

  await expect(page.getByText('Fizz', {exact: true })).toBeVisible();
  await expect(page.getByText('FizzBuzz', {exact: true})).toHaveCount(2);
  await expect(page.getByText('Invalid Item')).toHaveCount(2);
});