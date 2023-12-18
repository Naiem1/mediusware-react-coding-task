# **Mediusware Front-End Developer (ReactJS) Coding Task

### Problem One



You will see two input fields name and status, by clicking submit the name and status will be shown at the table below the form.

- By Clicking Active it will only show the data that has the status Active
- By Clicking Completed it will only show the data that has status Completed
- By Clicking All if will show all the data and sort them by given order
	-  Active tasks will show first
	- Completed will show after active Tasks
	-  All other status (i.e : Pending, Archive, etc) will show after Completed status Tasks


### Problem Two



The main screen should have two buttons (**All Contact** and  **US Contact**  described below) centered vertically and horizontally with a margin between them.

Clicking on  **All Contact**  should open a  **Modal A**. Clicking on  **US Contact**  should open a  **Modal B**.

Both modals should have three buttons:

-   Modal Button A - labeled ‘All Contacts’, switching to Modal A
-   Modal Button B - labeled ‘US Contacts’, switching to Modal B
-   Modal Button C - labeled ‘Close’, closing modals

and a checkbox in the footer, LHS:

-   Checkbox A - labeled ‘Only even’, when checked, only contacts with even ID (ex. 2, 4, 6...) should be displayed.

In Modal A should be displayed (from API) contacts from all countries.

In Modal B should be displayed (from API) contacts only from US.

Clicking on the contact items in modals should open a next modal (Modal C) with few contact details, no matter what.

Opening Modals A and B should change the URL of the page.

Opening Modal C should NOT change the URL.

Button A and Modal Button A should have a color: #46139f

Button B and Modal Button B should have a color: #ff7f50

Button C should have a white background and border #46139f (same as the background of Button A)

Modals A and B should have a search box to filter contacts (use API param). Contacts should be filtered while typing in a search input (with a small delay) and immediately on hitting the Enter key.

Lists of contacts should display only the first page (API param, page=1) after scrolling to the bottom of the modal load next page (infinity scroll).
