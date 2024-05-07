import { Button, capitalize, Card, CardActions, CardContent, Chip, Paper, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";

export default function CardDetails({ jobDetails }){
    const {companyName, jobDetailsFromCompany, jobRole, location, logoUrl, maxExp, maxJdSalary, minExp, minJdSalary} = jobDetails;
    return (
        <Card variant="outlined" sx={{ boxShadow: 2}} style={{ borderRadius: 20}}>
            <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "start", padding: 15 }}>
                <Chip label="⌛ Posted 10 days ago" />
                <div style={{ display: "flex", flexDirection: "row", marginTop: 10, gap: 8}}>
                    <img src={logoUrl} style={{ height: "30px", marginTop: "10px", marginLeft: "4px"}} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <Typography variant="caption">{companyName}</Typography>
                        <Typography variant="body2">{jobRole}</Typography>
                        <Typography variant="caption">{location}</Typography>
                    </div>
                </div>
                <Typography variant="body2">Estimated Salary: ₹{minJdSalary}LPA - ₹{maxJdSalary}LPA</Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: grey[800]}}>About Company:</Typography>
                <Typography variant="caption" sx={{fontWeight: 'medium', color: grey[600]}}>About Us:</Typography>
                <Typography variant="caption" style={{ textAlign: "start"}}>{jobDetailsFromCompany}</Typography>
                <Typography variant="caption">Min experience</Typography>
                <Typography variant="body2">{minExp} - {maxExp} years</Typography>
                <Button variant="contained" style={{ width: "100%", backgroundColor: green.A400, color: "black", textTransform: "capitalize", fontWeight: "bold", marginTop: 10}}>Easy Apply</Button>
            </CardContent>
            
        </Card>
    )
}