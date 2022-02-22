import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialData1645457484624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO products (TITLE, PHOTO, DESCRIPTION, SHORT_DESCRIPTION)
        VALUES
        ('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.', 'Fjallraven - Foldsack/men clothing');

        INSERT INTO products (TITLE, PHOTO, DESCRIPTION, SHORT_DESCRIPTION)
        VALUES ('Mens Casual Premium Slim Fit T-Shirts','https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg','Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.','Slim Fit T-Shirts/men clothing');

        INSERT INTO products (TITLE, PHOTO, DESCRIPTION, SHORT_DESCRIPTION)
        VALUES ('Mens Cotton Jacket','https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg','great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',' Cotton Jacket/men clothing');

        INSERT INTO products (TITLE, PHOTO, DESCRIPTION, SHORT_DESCRIPTION)
        VALUES ('Mens Casual Slim Fit','https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg','The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.','Casual Slim Fit/men clothing');

        INSERT INTO products (TITLE, PHOTO, DESCRIPTION, SHORT_DESCRIPTION)
        VALUES ('John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain Bracelet','https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg','From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.','Bracelet/women jewelery');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM products`);
  }
}
