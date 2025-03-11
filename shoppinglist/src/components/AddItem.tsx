import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Item } from "../App2";

type AddItemProps = {
  addItem: (item: Item) => void;
}


function AddItem(props: AddItemProps) {

  const [open, setOpen] = useState(false);
  // item과 관련된 상태를 정의
  const [item, setItem] = useState<Item>({
    prouduct: '',
    amount: '',
  });

  const handleOpen = () => {setOpen(true);}
  const handleClose = () => {setOpen(false);}

  // addItem 함수를 호출하고 item 상태를 전달
  const addItem = () => {
    props.addItem(item); // -> 추가하고 나서 TextFiled 내에 있는 값들을 지움
    // JS에서 수업했음. 텍스트 필드를 지우고 모달 상자를 닫겠습니다.
    setItem({
      prouduct: '',
      amount: '',}
    );
    handleClose();
  }

  return(
    <>
      <br />
      <Button variant="outlined" onClick={handleOpen}>Add Item</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>

          <TextField value={item.prouduct} margin="dense"
            onChange={e => setItem({...item, prouduct:e.target.value})}
            label="Product" fullWidth
            />

          <TextField value={item.amount} margin="dense"
            onChange={e => setItem({...item, amount:e.target.value})}
            label="Amount" fullWidth
            />

        </DialogContent>
        <DialogActions>
          <Button onClick={addItem}>Add</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddItem;