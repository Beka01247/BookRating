'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian social science fiction novel and cautionary tale of a totalitarian regime that practices extreme surveillance and repression.',
        rating: 4.5,
        year_published: 1938
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A novel about the romantic and tragic figure of Jay Gatsby and his quixotic passion and obsession for the beautiful Daisy Buchanan.',
        rating: 4,
        year_published: 1938
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel of racial injustice in a fictional town in the USA, seen through the eyes of a child.',
        rating: 5,
        year_published: 1938
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'A romantic novel of manners that explores the nature of love, marriage, and family against a backdrop of English society in the early 19th century.',
        rating: 4.5,
        year_published: 1938
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});  
  }
};
