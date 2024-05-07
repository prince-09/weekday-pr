import { Button, Card, CardActions, CardContent, Chip, Paper, Typography } from "@mui/material";

export default function CardDetails(){
    return (
        <Card variant="outlined" sx={{ boxShadow: 2}} style={{ borderRadius: 20}}>
            <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "start", padding: 15 }}>
                <Chip label="⌛ Posted 10 days ago" />
                <div style={{ display: "flex", flexDirection: "row", marginTop: 10, gap: 8}}>
                    <img src="https://unsplash.com/photos/green-leafed-plant-on__f0tEf_E" style={{ height: "30px", marginTop: "10px", marginLeft: "4px"}} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <Typography variant="caption">Fampay</Typography>
                        <Typography variant="body2">Software Engineer</Typography>
                        <Typography variant="caption">Delhi</Typography>
                    </div>
                </div>
                <Typography variant="body2">Estimated Salary: ₹18LPA - ₹30LPA</Typography>
                <Typography variant="body2">About Company:</Typography>
                <Typography variant="caption">About Us:</Typography>
                <Typography variant="caption" style={{ textAlign: "start"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Typography>
                <Typography variant="caption">Min experience</Typography>
                <Typography variant="body2">2 years</Typography>
                <Button variant="contained" style={{ width: "100%"}}>Easy Apply</Button>
            </CardContent>
            <CardActions style={{ display: "flex", flexDirection: "column", alignItems: "start"}}>  
                
            </CardActions>
        </Card>
    )
}