const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("../../utils/safeDescribe");
const deleteReader = require("./queries/deleteReader");

safeDescribe("#POST readers", () => {
  let readerIdCreated;

  after(async () => {
    await deleteReader({ readerId: readerIdCreated });
  });

  it("creates a new reader in the database", async () => {
    const response = await request(router)
      .post("/readers")
      .send({
        name: "Jane Doe",
        email: "janemdoe@gmail.com",
        password: "doedoe12",
        genre: "Bio"
      });

    readerIdCreated = response.body.readerId;

    expect(response.status).to.equal(201);
  });
});
