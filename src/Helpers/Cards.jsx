import React from 'react'
import '../Helpers/card.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '1px', transform: 'scale(0.5)' }}
    >
        •
    </Box>
);


const Cards = (props) => {
    const { codigo, fecha, nombre, unidad_medida, valor } = props.data
    return (
        <div>
            <div class="card">

                <Card sx={{ minWidth: 200 }}>
                    <CardContent>
                            {codigo}
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        </Typography>
                        <Typography variant="h5" component="div">
                            {nombre}<br />
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {unidad_medida}<br />
                            {valor}
                        </Typography>
                        <Typography variant="body2">
                            {fecha}
                        </Typography>
                    </CardContent>
                </Card>

            </div>




        </div>
    )
}

export default Cards