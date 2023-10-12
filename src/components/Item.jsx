/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({ title, description, price, pictureUrl }) => {
return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        alt={title}
        height="140"
        image={pictureUrl}  
        title={title}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        <Typography variant="body2" color="text.primary">
        Precio: ${price}
        </Typography>
    </CardContent>
    <Button size="small">Ver detalles</Button>
    </Card>
);
};

export default Item;



