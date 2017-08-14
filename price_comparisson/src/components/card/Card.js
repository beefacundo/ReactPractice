import React, { Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import img from "../../../public/nature.jpg";
import profile from "../../../public/profile.jpg";


/*const ProductCard = () => (

  <Card className='col-md-4 col-xs-12'>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar={profile}
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
    <img src={img} alt=''/>
    </CardMedia>
    <CardTitle title="Card Titulo" subtitle="Card Subtitulo" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  */
class ProductCard extends Component {
  render () {
    return (
      <Card className='col-md-3 col-xs-12'>
        <CardHeader
          title={this.props.avatarTitle}
          subtitle={this.props.avatarSubTitle}
          avatar='../../../public/Garbarino.png'//{this.props.avatarImg}
        />
        <CardMedia>
          <img src={img} alt=''/>
        </CardMedia>
        <CardTitle 
          title={this.props.cardTitle}
          subtitle={this.props.cardSubTitle}
        />
        <CardText>
          {this.props.description}
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}

export default ProductCard;