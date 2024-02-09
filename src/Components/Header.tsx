import { Group, Burger, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './styles/HeaderSearch.module.css';
import { useState } from 'react';


const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
];

export function HeaderSearch({ onSearch }: { onSearch: (id: string) => void }) {
  const [opened, { toggle }] = useDisclosure(false);
  const [inputValue, setinputValue] = useState("")
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

    const inputSearch = ({target} : { target: { value: string } }) => {
      const value = target.value;
      setinputValue(value)
    }

    const sendSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (inputValue.length <= 1) return;
      onSearch(inputValue.trim())
      setinputValue("")
    }

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <form onSubmit={ sendSearch }>
            <TextInput
                variant="filled"
                placeholder="Search..."
                onChange={ inputSearch }
            />
          </form>
        </Group>
      </div>
    </header>
  );
}