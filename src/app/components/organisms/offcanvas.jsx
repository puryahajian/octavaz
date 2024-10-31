
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Text from '../atoms/text';
import ButtonGeneral from '../atoms/button-general';

function OffCanvasExample({ ...props  }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const styleText = {
      color: 'white',
    }
    return (
        <div>
          <Button onClick={handleShow} className="mx-4 bg-transparent border-none lg:hidden p-0">
              <MenuIcon sx={{width: '35px', height: '35px'}}/>
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header className='bg-bgmain'  >
              {/* closeButton */}
                <CloseIcon sx={{color: 'white'}} onClick={handleClose}/>
              </Offcanvas.Header>
              <Offcanvas.Body className='bg-bgmain text-white'>
                <ul className='grid gap-4 px-1'>
                  <li><Text style={styleText}>قوانین</Text></li>
                  <li><Text style={styleText}>استعلام مدرک</Text></li>
                  <li><Text style={styleText}>درباره ما</Text></li>
                  <li><Text style={styleText}>مسئولیت اجتماعی</Text></li>
                  <li><Text style={styleText}>بلاگ</Text></li>
                  <li><Text style={styleText}>راهنمای استفاده از دوره</Text></li>
                  <li><Text style={styleText}>مدرک بین المللی</Text></li>
                </ul>
                <ButtonGeneral className={`w-full mt-4`}>ثبت نام/ ورود</ButtonGeneral>
              </Offcanvas.Body>
          </Offcanvas>
        </div>
    );
}

export default function Example() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
