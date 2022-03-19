import Hello from './Hello'

function Main() {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Aufa" />
      <Hello name="Mikel" />
      <Hello name="Hannah" />
      <Hello name="Jonas" />
      <Hello name="Martha" />
    </main>
  );
}

export default Main