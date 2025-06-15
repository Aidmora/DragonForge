const crearRecurso = promise => {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    r => { status = 'success'; result = r; },
    e => { status = 'error';   result = e; }
  );
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error')   throw result;
      return result;
    }
  };
};
export function fetchRecurso(url) {
  const promise = fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
  return crearRecurso(promise);
}