import { change } from ".";

describe('Coin tests', () => {
  test(`Given change is given a price
        And exactly one coin is needed
        That coin is returned in an object`, () => {
    expect(change(10)).toEqual({"10p": 1});
    expect(change(50)).toEqual({"50p": 1});
    expect(change(100)).toEqual({"£1": 1});
    expect(change(200)).toEqual({"£2": 1});
  });
  test(`Given change is given a price
        And only 2 coins are needed
        Those coins are returned in an object`, () => {
    expect(change(6)).toEqual({"5p": 1, "1p": 1});
    expect(change(22)).toEqual({"20p": 1, "2p": 2});
    expect(change(60)).toEqual({"50p": 1, "10p": 1});
    expect(change(150)).toEqual({"50p": 1, "£1": 1});
  });
  test(`Given change is given a price
        And two or more of the same coin is needed
        Those coins are returned in an object`, () => {
    expect(change(41)).toEqual({"20p": 2, "1p": 1});
    expect(change(9)).toEqual({"5p": 2, "2p": 2});
    expect(change(9)).toEqual({"5p": 2, "2p": 2});
  });
  test(`Given change is given a price
        And a variety of differnt coins are needed
        Those coins are returned in an object`, () => {
    expect(change(17)).toEqual({"10p": 1, "5p": 1, "2p": 1});
    expect(change(49)).toEqual({"20p": 2, "5p": 1, "2p": 2});
    expect(change(199)).toEqual({"£1": 1, "50p": 1, "20p": 2, "5p": 1, "2p": 1});
  });
});