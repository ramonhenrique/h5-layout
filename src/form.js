var React = require('react');
require('./form.less');
var h5mixinprops = require('./mixins/h5mixinprops')

var hform = React.createClass({
    propTypes: {
        labelText: React.PropTypes.string.isRequired
    },
    mixins: [h5mixinprops],
    render: function () {
        if (!this.props.children) {
            return console.error("This component don't need a child");
        }
        if (!this.props.labelText) {
            return console.error("Add a label='Button Name'");
        }
        var propsTraduzidas = this.getProps();
        var titleForm = propsTraduzidas.labelText;
        var titulo = React.createElement('h2', {}, [titleForm, React.createElement('br'), React.createElement('br')]);


        var styleForm = {
            padding: "10px"
        };
        var tableProps = {};
        tableProps.width= "100%";
        tableProps.cellSpacing="10px";
        tableProps.cellPadding= "0";
        tableProps.className=propsTraduzidas.className;
        return (
            React.createElement('table', tableProps, [this.props.children])
        )
    }

});

module.exports = hform;
