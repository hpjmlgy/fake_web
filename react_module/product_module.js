/**
 * Created by Noah on 2016/9/26.
 */
var product_data = [{id: 1, src: "img/product_test.jpg", title: "照片冲印", content: "独家进口,高科技产品,随撕随贴,耐刮防水"}];
var Product_module = React.createClass({
    render: function () {
        var children = this.props.data.map(function (elem) {
            var temp = elem.content.split(",").map(function (character) {
                return (
                    <li>{character}</li>
                )
            });

            return (
                <div className="product">
                    <div className="product_pic" style={{backgroundImage: 'url(' + elem.src + ')'}}></div>
                    <div className="describe">
                        <spam className="title">{elem.title}</spam>
                        <ul className="character">
                            {temp}
                        </ul>
                    </div>
                </div>
            )
        });

        return (
            <div>{children}</div>
        );
    }
});

ReactDOM.render(
    <Product_module data={product_data}/>,
    document.getElementById('pop_products')
);