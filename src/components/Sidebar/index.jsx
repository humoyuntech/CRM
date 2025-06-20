import { Outlet, useNavigate } from "react-router-dom";
import {ExitIcon, Arrow, Body, ChildWrapper, Container, LogOut, Logo, Menu, MenuItem, Side, Wrapper,} from "./style";

import Navbar from "../Navbar";
import { Profile } from "./profile";
import sidebar from "../../utils/sidebar";
import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState([3]);

  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  const onLogOut = () => {
    navigate("/");
  };

  const onClickParent = (id) => {
    if (open.includes(id)) {
      let data = open.filter((val) => val !== id);
      setOpen(data);
    } else {
      setOpen([...open, id]);
    }
  };
  return (
    <Container>
      <Side>
        <Logo onClick={onClickLogo}>Webbrain CRM</Logo>
        <Profile name="Khumoyun Rustamov" email="humoyun@gmail.com" />
        <Menu>
          {sidebar.map((parent) => {
            const active = open.includes(parent.id);
            const { icon: Icon } = parent;
            return (
              <>
                <MenuItem
                  key={parent.id}
                  onClick={() => onClickParent(parent.id)}
                >
                  <MenuItem.Title>
                    <Icon className="icon" /> {parent.title}
                  </MenuItem.Title>
                  {parent?.children?.length && <Arrow active={active} />}
                </MenuItem>
                <ChildWrapper active={active}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem key={child?.id}>
                        <MenuItem.Title>{child?.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </>
            );
          })}
        </Menu>

        <LogOut onClick={onLogOut}><ExitIcon /> Chiqish</LogOut>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};

export default Sidebar;