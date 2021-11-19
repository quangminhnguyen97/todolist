import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CancelIcon from '@mui/icons-material/Cancel';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ToDoList = () => {
    const [age, setAge] = React.useState('');
    const [level, setLevel] = React.useState('');

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleChangeLevel = (event) => {
        setLevel(event.target.value);
    };

    const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    }));    

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    return (
        <Grid container>
            <Grid container justifyContent="center" mt={2} xs={12} >
                <Typography variant='h4'>Quản lý công việc</Typography>
            </Grid>
            <Grid xs={12} mt={2} mb={2}>
                <Divider>
                    <Chip label="Made by Minh" />
                </Divider>
            </Grid>
            <Grid container xs={12} mt={3}>
                <Grid 
                    container 
                    xs={6} 
                    columns={12} 
                >
                    <Grid item xs={5} ml={10}>
                        <TextField 
                            id="outlined-basic" 
                            color="secondary"
                            label="Tìm kiếm" 
                            variant="outlined" 
                            size="small"
                            placeholder="Nhập tên công việc"
                            fullWidth
                        />
                    </Grid>
                    <Button variant="contained" endIcon={<SearchIcon />}>Tìm kiếm</Button>
                    <Grid item xs={3} ml={10} className="test">
                        <FormControl fullWidth>
                            <StyledInputLabel id="demo-simple-select-label">Sắp xếp theo</StyledInputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Sắp xếp theo"
                                onChange={handleChangeAge}
                                size="small"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" endIcon={<AddIcon />}  color="secondary" fullWidth>Thêm công việc</Button>
                </Grid>
                <Grid container xs={12} mt={2}>
                    <Grid item xs={6} />
                    <Grid container xs={6} spacing={2}>
                        <Grid item xs={5}>
                            <TextField
                                variant="outlined" 
                                size="small"
                                placeholder="Nhập tên công việc"
                                color="secondary"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Độ ưu tiên</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label1"
                                    id="demo-simple-select1"
                                    value={level}
                                    label="Sắp xếp theo"
                                    onChange={handleChangeLevel}
                                    size="small"
                                >
                                    <MenuItem value={10}>Dễ</MenuItem>
                                    <MenuItem value={20}>Trung bình</MenuItem>
                                    <MenuItem value={30}>Khoai</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" endIcon={<AddBoxIcon />}  color="success" fullWidth>Thêm</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="outlined" endIcon={<CancelIcon />}  color="warning" fullWidth>Hủy</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid xs={10} style={{ margin: '20px auto'}}>
                <Divider/>
            </Grid>

            <Grid container xs={10} mt={3} style={{ margin: '20px auto' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <caption>Danh sách công việc</caption>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell align="left">Tên công việc</StyledTableCell>
                                <StyledTableCell>Mức độ</StyledTableCell>
                                <StyledTableCell align="center">Tùy chọn</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {index+1}
                                    </StyledTableCell>
                                    <StyledTableCell>{row.name}</StyledTableCell>
                                    <StyledTableCell>
                                        <Button variant="outlined" color="secondary">
                                            Khoai
                                        </Button>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button variant="contained" color="warning" style={{ marginRight: 20}}>
                                            Chỉnh sửa
                                        </Button>
                                        <Button variant="contained" color="error">
                                            Xóa
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default ToDoList;