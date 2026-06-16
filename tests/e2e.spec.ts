import { test, expect } from '@playwright/test';

test.describe("Page d'accueil", () => {
  test('doit afficher le hero', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });
  test('doit afficher les 3 programmes', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=A21 Training').first()).toBeVisible();
  });
});

test.describe('Authentification', () => {
  test('doit afficher le formulaire de connexion', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });
});

test.describe("Rejoindre l'académie", () => {
  test('doit afficher les programmes', async ({ page }) => {
    await page.goto('/rejoindre-academie');
    await expect(page.locator('text=A21 Training').first()).toBeVisible();
  });
});

test.describe('Page candidature', () => {
  test('doit afficher le formulaire', async ({ page }) => {
    await page.goto('/candidature');
    await expect(page.locator('input[name="prenom"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });
});

test.describe('Nos valeurs', () => {
  test('doit afficher les valeurs', async ({ page }) => {
    await page.goto('/nos-valeurs');
    await expect(page.locator('text=Foi').first()).toBeVisible();
  });
});
