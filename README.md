# Change

Your task is to write a function called `change`. The function will receive one param called price which is a number you then need to return an object where the key is the coin and the value is the number of that coin needed to pay the price. All of the standard British coins are fine to include and you can include as many of them as you want (you aren't limited to how many coins are at your disposal).

See this basic example:

```ts
change(62);

//returns
{
  "50p": 1,
  "10p": 1,
  "2p": 1
}
```

Your function should use the fewest coins possible to pay instead of any amount of coins that would add up to the price. For example, if change were passed in the price `20`, this response would be incorrect even though it is the right amount:

```ts
{
  "10p": 2
}
```

This is because we are returning 2 10p coins when we could have returned 1 20p instead which is less.

run `npm test` to test and remember to only modify `index.ts`