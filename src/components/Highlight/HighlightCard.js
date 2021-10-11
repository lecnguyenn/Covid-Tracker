import React from 'react';
import { Card, CardContent, Typography, makeStyles} from '@material-ui/core';
import CountUp from 'react-countup';


const useStyles = makeStyles({
    wrapper: (props) =>{
        if(props.type === 'confirmed') return { borderLeft: '7px solid black'};
        if(props.type === 'recovered') return { borderLeft: '7px solid green'};
        else return { borderLeft: '7px solid red'}
    },
    title: {
        fontSize: 18, marginBottom: 5, fontWeight: 'bold'
    },
    count: {
        fontWeight: 'normal', fontSize: 18, 
    }
})
function HighlightCard({ title, count, type }) {

    const styles = useStyles({type});
    
    return (
      <Card className={styles.wrapper}>
        <CardContent>
            <Typography component="p" varian="body2" className={styles.title}>
                {title}
            </Typography>
            <Typography componet="span" varian="body2" className={styles.count}>
               <CountUp end={count || 0} duration={3} separator=' ' /> 
            </Typography>
        </CardContent>
      </Card>
    )
}

export default HighlightCard
