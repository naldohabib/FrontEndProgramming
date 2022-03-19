function Hello(props) {
    // Melakukan destructing props (object)
    const { name } = props;
  
    return (
      <div className="hello">
        <h2>Hello React</h2>
        <p>Saya {name} - Frontend Engineer</p>
      </div>
    );
  }
  
export default Hello;