import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: "stein@gmial.com",
        password: "123456",
        first_name: "Stein",
        last_name: "Hanssen",
        phone: "123456789",
      },
    ]);
  }
}
