import React, { useState, useEffect } from "react";
import { useCombobox } from "downshift";
import { NavLink } from "react-router-dom";
import { getAllUsers } from "../../util/getRequests";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

export default function Search() {
	const [ inputItems, setInputItems ] = useState([]);
	const [ users, setUsers ] = useState([]);
  const [ singleUser, setSingleUser ] = useState("");

  const getUserInfo = async () => {
		try {
      const res = await getAllUsers();
			setUsers(res);
		} catch (error) {
			console.log(error);
			setUsers([]);
		}
	};

  const {
		isOpen,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox({
		items: inputItems,
		onInputValueChange: ({ inputValue }) => {
      setInputItems(
        users.filter((item) =>
          item.username.toLowerCase().startsWith(inputValue.toLowerCase(),
            
          )
          )
          );
        },   
  });
  

	useEffect(() => {
    getUserInfo();
  
	}, []);

  return (
		<div className="searchDiv">
			<div {...getComboboxProps()}>
				<SearchIcon className="icon" />
				<InputBase
					{...getInputProps()}
					placeholder="Search"
					enterbutton="Search"
					size="large"
					className="searchDivInput"
				/>
			</div>
			<ul className="searchShow" {...getMenuProps()}>
				{isOpen &&
					inputItems.map((item, index) => (
						<span
							key={item.id}
							{...getItemProps({ item, index })}
							onClick={() => setSingleUser(item.id)}
						>
							<li
								className="listSearch"
								style={
									highlightedIndex === index
										? { background: "rgb(255, 255, 255, 1)", cursor: "pointer" }
										: {}
								}
							>
								<NavLink
									className="navlinkSearch"
									exact
									to={`/${item.username}/profile`}
								>
									<h4 className="searchName">{item.username}</h4>
								</NavLink>
							</li>
						</span>
					))}
			</ul>
		</div>
	);
}


