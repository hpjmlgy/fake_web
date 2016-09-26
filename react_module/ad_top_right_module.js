/**
 * Created by Noah on 2016/9/26.
 */
var ad_top_right_data = [{id: "ad_top_rt", src: "img/ad_top_rt.jpg"}, {id: "ad_top_rb", src: "img/ad_top_rb.jpg"}];

var Ad_top_right = React.createClass({
    render: function () {
        var children = this.props.data.map(function (elem) {
            var divstyle = {
                backgroundImage: 'url(' + elem.src + ')'
            };
            return (
                <div id={elem.id} key={elem.id} style={divstyle}></div>
            )
        });
        return (
            <div>{children}</div>
        )
    }
});
ReactDOM.render(
    <Ad_top_right data={ad_top_right_data}/>,
    document.getElementById('ad_top_right')
);
