import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

function DropDown({ rating, selectedRating, setSelectedRating }) {
  return (
    <Listbox value={selectedRating} onChange={setSelectedRating}>
      <ListboxButton>{selectedRating.rating}</ListboxButton>
      <ListboxOptions anchor="bottom">
        {rating.map((rate) => (
          <ListboxOption
            key={rate.id}
            value={rate}
            className="data-[focus]:bg-blue-100 group flex gap-2 bg-white data-[focus]:bg-blue-100"
          >
            {rate.rating}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
export default DropDown;
