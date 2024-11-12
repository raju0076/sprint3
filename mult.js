async function delayedMultiGreeting(messages) {
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    for (const item of messages) {
      await delay(item.delay);
      console.log(item.message);
    }
  }
  
  const messages = [
    { message: "Hello, world!", delay: 2000 },
    { message: "How are you?", delay: 1000 },
    { message: "Goodbye!", delay: 3000 },
  ];
  
  delayedMultiGreeting(messages);
  // Logs "Hello, world!" after 2 seconds, "How are you?" after 3 seconds, "Goodbye!" after 6 seconds