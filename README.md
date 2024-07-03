# Take Home Exercise

Thank you for taking the time to do this exercise. Please spend no longer than an hour on the below. If you enjoy the exercise and would like to continue, we would be delighted to interview. We will spend the first part of your interview discussing this work.

Please fork this repository and send us your answer. Remember to provide us relevant permission to access the repository.

## Brief: Kanban Board Bookings

An online mental health clinic is building a new board to allow its operations team to keep track of new bookings. They have a basic form to enter the member's details onto the board:

- Name
- Title
- Age
- Email
- Mobile Number

The board has 4 columns:

- **Unclaimed**: new cases
- **First Contact**: operations team contact member
- **Preparing Work Offer**: searching for Therapist
- **Send to Therapist**: matched with Therapist

This is what the board currently looks like:
![initial-board](public/initial-board.png)

## How to Start

This is a simple create-react-app application, the instructions on how to run can be found in [here](CONTRIBUTING.md).
We are using pure ReactJS with TypeScript here with styling done in pure CSS, but feel free to approach this however you want. If you want to use libraries, we encourage you to - there is no right or wrong answer here! We use tailwind and styled-components for styling internally, but we don't expect you to be familiar with these up front.

## Tasks

1. Please add validations to the member form, relevant error and helper messages.
2. Once 'Submit' is pressed, a card will be created on under _Unclaimed_ column.
3. The card will contain all the details entered into the form.
4. Please save new card data to _local storage_.
5. Previous entered cards will reload onto the board as saved in _local storage_.
6. Please add styling to the form and page.

## Review Interview

Once we have received your repository we will organise a follow-up interview to discuss your solution.

## Bonus: Tasks

If you have time and are feeling adventurous feel free to implement the bonus tasks listed below.

1. Implement the drag and drop of the cards to different columns.
2. Each column must indicate the number of cards.
3. Please add styling to the board and page.

If you don't have time, that's fine. During the interview, we will discuss strategies that you might have used to achieve these.

The final design of the board should look like this:
![final-board](public/final-board.png)

## Third party libraries used

1. Redux - Used for global state management.
2. Lodash/debounce - used to run a function every 500ms to update the local storage from the redux state.

## Further improvements

1. More styling of the form and the layout of the form.
   eg : the form can be shown on click of a add contact button and the button can be placed on the 'Unclaimed' container.
2. Unit testing - some example test cases,
   a. Component renders as expected.
   b. Ensure local storage is used on reload, updated everytime on addition of new contact and update of status.
   c. Ensure newly added contact always ends up in the unclaimed container.
   d. Validation of input fields (edge cases for empty string, string with spaces, invalid age, invalid email format & invalid phone number).
3. Third party libraries can be used for validating email and phone numbers as regex is not good in terms of performance.
4. Styling framework such as material-ui can be used.
5. Device compatible styling to support display across different screen sizes.
6. Vulnerabilities to be addressed.
