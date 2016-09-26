/**
 * Created by Noah on 2016/9/26.
 */
//ad_top_module

var ad_top_data = [{id: "ad_top_left", src: "img/ad_top_left.jpg"}, {
    id: "ad_top_mid",
    src: "img/ad_top_mid.jpg"
}, {id: "ad_top_right", src: ""}];
var AD_top = React.createClass({
    render: function () {

        var adGrids = this.props.data.map(function (elem) {
            var divstyle = {
                backgroundImage: 'url(' + elem.src + ')'
            };
            return (
                <div id={elem.id} key={elem.id} style={divstyle}></div>
            )
        });
        return (
            <div>{adGrids}</div>
        )
    }
});
ReactDOM.render(
    <AD_top data={ad_top_data}/>,
    document.getElementById('ad_top')
);
