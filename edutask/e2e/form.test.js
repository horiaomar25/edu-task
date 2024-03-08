
import { test, expect } from '@playwright/test';
import DropDownMenu from '@/app/tasks/Components/DropMenu';

//test skeleton
test('opening task menu', async function ({ page }){
    
    // start from the home page
  await page.goto('http://localhost:3000/tasks');

const clicked = false

 // Mount a component. Returns locator pointing to the component.
 const component = await mount(
    <DropDownMenu  onClick={() => { clicked = true }}></DropDownMenu>

  );

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText('Open');

  // Perform locator click. This will trigger the event.
  await component.click();

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
})