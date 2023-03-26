import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class InvoicesController {
  public async index() {
    return [
      {
        id: 1,
        title: "Hello world",
      },
      {
        id: 2,
        title: "Hello universe",
      },
    ];
  }

  public async show({ params }: HttpContextContract) {
    return {
      id: params.id,
      title: "Hello world",
    };
  }

  public async store({ request }: HttpContextContract) {
    const { invoice_number, invoice_provider } = request.body();

    console.warn({ invoice_number, invoice_provider });

    return {
      id: 1,
      title: "Hello world",
      invoice_number,
      invoice_provider,
    };
  }

  public async update({ request, params }: HttpContextContract) {
    const body = request.body();

    return {
      id: params.id,
      title: "Hello world",
      body,
    };
  }
}
