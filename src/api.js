export function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
}

export async function fetchData() {
  const data = await fetch();
  console.log("---" + data);
  return data;
}

fetchData();
