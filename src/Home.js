import { Translate } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

export default function Home() {
    return (
        <div>
            <Typography
                variant="h4"
                component="div"
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            >
                <h4>Wel-come to my Project</h4>
                <h5>Registration-Login-Dashboard</h5>

            </Typography>
        </div>
    )
}
