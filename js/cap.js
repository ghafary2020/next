import Typed from 'typed.js';

var options = {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 40
};
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    // Waits 1000ms after typing "First"
    strings: ['First ^1000 sentence.', 'Second sentence.'],
    strings: ['This is a JavaScript library', 'This is an ES6 module'],
    smartBackspace: true, // Default value,
    strings: ['git push --force ^1000\n `pushed to origin with option force`']
});
class TypedReactDemo extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return ( < div className = "wrap" >
            <
            h1 > Typed.js < /h1><div className = "type-wrap" > <
            span style = {
                { whiteSpace: 'pre' } }
            ref = {
                (el) => { this.el = el; } }
            /> </div > < /div>
        );
    }
}

ReactDOM.render( <
    TypedReactDemo strings = {
        [
            'Some <i>strings</i> are slanted',
            'Some <strong>strings</strong> are bold',
            'HTML characters &times; &copy;'
        ]
    }
    />,
    document.getElementById('react-root')
);