import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  company_name: string;

  @column()
  company_address: string;

  @column()
  company_phone: string;

  @column()
  company_email: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
