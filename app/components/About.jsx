var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application build in React. I built this
        for the Complete React Developer Course taught by <a href="http://www.mead.io">Andrew Mead</a>.
      </p>
      <p>Here are some of the tools I used:</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - The
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/">OpenWeatherMap</a> - The weather API
            called upon.
        </li>
        <li>
          <a href="https://webpack.github.io/">Webpack</a> - The module loader
            used.
        </li>
        <li>
          <a href="https://github.com/mzabriskie/axios">Axios</a> - The HTTP request
            client used.
        </li>
      </ol>
      <p>Along the way I encountered some problems I had
        to reason about. Here are my thoughts:
      </p>
    </div>
  )
};

module.exports = About;
