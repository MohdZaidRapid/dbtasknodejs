const doWork = async () => {
  return "Zaid";
};

doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log("e", e);
  });
