var { Des, TripleDes, pinBlockFormat0 } = require("../index");

test("des crypto", () => {
  var pan = "0819841515647280";
  var pin = "1234656";
  var keyhex = "1c1c1c1c1c1c1c1c";

  const pinXorPan = pinBlockFormat0(pan, pin);
  expect(pinXorPan).toBe("0712AC243EA9B8D7");

  const cipher = Des.encrypt(pinXorPan, keyhex);

  const decrypted = Des.decrypt(cipher, keyhex);
  expect(decrypted).toBe(pinXorPan);
});

test("Big des crypto", () => {
  var hex = "FB9235F4E4037F2327DCC8964F1F9B8C30F42C8E2FFF224A99029000";
  var keyhex = "1c1c1c1c1c1c1c1c";

  const cipher = Des.encrypt(hex, keyhex);
  const decrypted = Des.decrypt(cipher, keyhex);

  expect(decrypted).toBe(
    "FB9235F4E4037F2327DCC8964F1F9B8C30F42C8E2FFF224A9902900000000000",
  );
});

test("triple des crypto", () => {
  var pan = "0819841515647280";
  var keyhex = "1c1c1c1c1c1c1c11c143545454543434c11c143545454543434";

  const cipher = TripleDes.encrypt(pan, keyhex);

  const decrypted = TripleDes.decrypt(cipher, keyhex);
  expect(decrypted).toBe(pan);
});
