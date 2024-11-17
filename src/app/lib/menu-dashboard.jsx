
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PaymentsIcon from '@mui/icons-material/Payments';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MenuDashboard = [
    { id : 1 ,label: "داشبورد", icon: <GridViewIcon /> },
    { id : 2 ,label: "حساب کاربری", icon: <PersonOutlineIcon /> },
    { id : 3 ,label: "دوره های خریداری شده", icon: <PlayArrowIcon /> },
    { id : 4 ,label: "گزارشات مالی", icon: <PaymentsIcon /> },
    { id : 5 ,label: "پیام ها", icon: <EmailIcon /> },
    { id : 6 ,label: "تمرین های اپلود شده", icon: <SettingsIcon /> },
    { id : 7 ,label: "اعتبار من", icon: <PaymentIcon /> },
    { id : 8 ,label: "معرفی به دوستان", icon: <PersonAddIcon /> },
];

export default MenuDashboard;
