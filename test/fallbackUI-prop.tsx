import * as React from 'react'

import { A } from '../src/component/A'
import { B } from '../src/component/B'
import { Box } from '../src/component/Box'
import { Breadcrumb } from '../src/component/Breadcrumb'
import { Button } from '../src/component/Button'
import { Buttons } from '../src/component/Buttons'
import { Card } from '../src/component/Card'
import { Checkbox } from '../src/component/Checkbox'
import { Column } from '../src/component/Column'
import { Columns } from '../src/component/Columns'
import { Container } from '../src/component/Container'
import { Content } from '../src/component/Content'
import { Control } from '../src/component/Control'
import { Delete } from '../src/component/Delete'
import { Dropdown } from '../src/component/Dropdown'
import { Em } from '../src/component/Em'
import { Field } from '../src/component/Field'
import { FileUpload } from '../src/component/FileUpload'
import { Footer } from '../src/component/Footer'
import { Heading } from '../src/component/Heading'
import { Help } from '../src/component/Help'
import { Hero } from '../src/component/Hero'
import { Icon } from '../src/component/Icon'
import { Image } from '../src/component/Image'
import { Input } from '../src/component/Input'
import { Label } from '../src/component/Label'
import { Level } from '../src/component/Level'
import { Li } from '../src/component/Li'
import { Media } from '../src/component/Media'
import { Menu } from '../src/component/Menu'
import { Message } from '../src/component/Message'
import { Modal } from '../src/component/Modal'
import { Navbar } from '../src/component/Navbar'
import { Notification } from '../src/component/Notification'
import { P } from '../src/component/P'
import { Pagination } from '../src/component/Pagination'
import { Panel } from '../src/component/Panel'
import { Progress } from '../src/component/Progress'
import { Radio } from '../src/component/Radio'
import { Section } from '../src/component/Section'
import { Select } from '../src/component/Select'
import { Small } from '../src/component/Small'
import { Span } from '../src/component/Span'
import { Strong } from '../src/component/Strong'
import { Sub } from '../src/component/Sub'
import { Subtitle } from '../src/component/Subtitle'
import { Sup } from '../src/component/Sup'
import { Table } from '../src/component/Table'
import { Tabs } from '../src/component/Tabs'
import { Tag } from '../src/component/Tag'
import { Tags } from '../src/component/Tags'
import { Textarea } from '../src/component/Textarea'
import { Tile } from '../src/component/Tile'
import { Title } from '../src/component/Title'
import { Ul } from '../src/component/Ul'
import { U } from '../src/component/U'

export function classNameProp () {
  return (
    <>
      <A fallbackUI={<div>Opss...</div>} />
      <B fallbackUI={<div>Opss...</div>} />
      <Box fallbackUI={<div>Opss...</div>} />
      <Breadcrumb fallbackUI={<div>Opss...</div>} />
      <Breadcrumb.Item fallbackUI={<div>Opss...</div>} />
      <Button fallbackUI={<div>Opss...</div>} />
      <Buttons fallbackUI={<div>Opss...</div>} />
      <Card fallbackUI={<div>Opss...</div>} />
      <Card.Content fallbackUI={<div>Opss...</div>} />
      <Card.Footer fallbackUI={<div>Opss...</div>} />
      <Card.Header fallbackUI={<div>Opss...</div>} />
      <Card.Image fallbackUI={<div>Opss...</div>} />
      <Checkbox fallbackUI={<div>Opss...</div>} />
      <Column fallbackUI={<div>Opss...</div>} />
      <Columns fallbackUI={<div>Opss...</div>} />
      <Container fallbackUI={<div>Opss...</div>} />
      <Content fallbackUI={<div>Opss...</div>} />
      <Control fallbackUI={<div>Opss...</div>} />
      <Delete fallbackUI={<div>Opss...</div>} />
      <Dropdown fallbackUI={<div>Opss...</div>} />
      <Dropdown.Content fallbackUI={<div>Opss...</div>} />
      <Dropdown.Divider fallbackUI={<div>Opss...</div>} />
      <Dropdown.Item fallbackUI={<div>Opss...</div>} />
      <Dropdown.Menu fallbackUI={<div>Opss...</div>} />
      <Dropdown.Trigger fallbackUI={<div>Opss...</div>} />
      <Em fallbackUI={<div>Opss...</div>} />
      <Field fallbackUI={<div>Opss...</div>} />
      <Field.Body fallbackUI={<div>Opss...</div>} />
      <Field.Label fallbackUI={<div>Opss...</div>} />
      <FileUpload fallbackUI={<div>Opss...</div>} />
      <FileUpload.Cta fallbackUI={<div>Opss...</div>} />
      <FileUpload.Icon fallbackUI={<div>Opss...</div>} />
      <FileUpload.Input fallbackUI={<div>Opss...</div>} />
      <FileUpload.Label fallbackUI={<div>Opss...</div>} />
      <FileUpload.Name fallbackUI={<div>Opss...</div>} />
      <Footer fallbackUI={<div>Opss...</div>} />
      <Heading fallbackUI={<div>Opss...</div>} />
      <Help fallbackUI={<div>Opss...</div>} />
      <Hero fallbackUI={<div>Opss...</div>} />
      <Hero.Body fallbackUI={<div>Opss...</div>} />
      <Hero.Foot fallbackUI={<div>Opss...</div>} />
      <Hero.Head fallbackUI={<div>Opss...</div>} />
      <Icon fallbackUI={<div>Opss...</div>} />
      <Icon.Svg fallbackUI={<div>Opss...</div>} />
      <Image fallbackUI={<div>Opss...</div>} />
      <Input fallbackUI={<div>Opss...</div>} />
      <Label fallbackUI={<div>Opss...</div>} />
      <Level fallbackUI={<div>Opss...</div>} />
      <Level.Item fallbackUI={<div>Opss...</div>} />
      <Level.Left fallbackUI={<div>Opss...</div>} />
      <Level.Right fallbackUI={<div>Opss...</div>} />
      <Li fallbackUI={<div>Opss...</div>} />
      <Media fallbackUI={<div>Opss...</div>} />
      <Media.Content fallbackUI={<div>Opss...</div>} />
      <Media.Left fallbackUI={<div>Opss...</div>} />
      <Media.Right fallbackUI={<div>Opss...</div>} />
      <Menu fallbackUI={<div>Opss...</div>} />
      <Menu.Label fallbackUI={<div>Opss...</div>} />
      <Menu.List fallbackUI={<div>Opss...</div>} />
      <Message fallbackUI={<div>Opss...</div>} />
      <Message.Body fallbackUI={<div>Opss...</div>} />
      <Message.Header fallbackUI={<div>Opss...</div>} />
      <Modal fallbackUI={<div>Opss...</div>} />
      <Modal.Background fallbackUI={<div>Opss...</div>} />
      <Modal.Card fallbackUI={<div>Opss...</div>} />
      <Modal.Card.Body fallbackUI={<div>Opss...</div>} />
      <Modal.Card.Foot fallbackUI={<div>Opss...</div>} />
      <Modal.Card.Head fallbackUI={<div>Opss...</div>} />
      <Modal.Card.Title fallbackUI={<div>Opss...</div>} />
      <Modal.Close fallbackUI={<div>Opss...</div>} />
      <Modal.Content fallbackUI={<div>Opss...</div>} />
      <Navbar fallbackUI={<div>Opss...</div>} />
      <Navbar.Brand fallbackUI={<div>Opss...</div>} />
      <Navbar.Burger fallbackUI={<div>Opss...</div>} />
      <Navbar.Divider fallbackUI={<div>Opss...</div>} />
      <Navbar.Dropdown fallbackUI={<div>Opss...</div>} />
      <Navbar.End fallbackUI={<div>Opss...</div>} />
      <Navbar.Item fallbackUI={<div>Opss...</div>} />
      <Navbar.Link fallbackUI={<div>Opss...</div>} />
      <Navbar.Menu fallbackUI={<div>Opss...</div>} />
      <Navbar.Start fallbackUI={<div>Opss...</div>} />
      <Notification fallbackUI={<div>Opss...</div>} />
      <P fallbackUI={<div>Opss...</div>} />
      <Pagination fallbackUI={<div>Opss...</div>} />
      <Pagination.Ellipsis fallbackUI={<div>Opss...</div>} />
      <Pagination.Link fallbackUI={<div>Opss...</div>} />
      <Pagination.List fallbackUI={<div>Opss...</div>} />
      <Pagination.Next fallbackUI={<div>Opss...</div>} />
      <Pagination.Previous fallbackUI={<div>Opss...</div>} />
      <Panel fallbackUI={<div>Opss...</div>} />
      <Panel.Block fallbackUI={<div>Opss...</div>} />
      <Panel.Heading fallbackUI={<div>Opss...</div>} />
      <Panel.Icon fallbackUI={<div>Opss...</div>} />
      <Panel.Tabs fallbackUI={<div>Opss...</div>} />
      <Progress fallbackUI={<div>Opss...</div>} />
      <Radio fallbackUI={<div>Opss...</div>} />
      <Section fallbackUI={<div>Opss...</div>}/>
      <Select fallbackUI={<div>Opss...</div>} />
      <Small fallbackUI={<div>Opss...</div>} />
      <Span fallbackUI={<div>Opss...</div>} />
      <Strong fallbackUI={<div>Opss...</div>} />
      <Sub fallbackUI={<div>Opss...</div>} />
      <Subtitle fallbackUI={<div>Opss...</div>} />
      <Sup fallbackUI={<div>Opss...</div>} />
      <Table fallbackUI={<div>Opss...</div>} />
      <Table.Container fallbackUI={<div>Opss...</div>} />
      <Tabs fallbackUI={<div>Opss...</div>} />
      <Tag fallbackUI={<div>Opss...</div>} />
      <Tags fallbackUI={<div>Opss...</div>} />
      <Textarea fallbackUI={<div>Opss...</div>} />
      <Tile fallbackUI={<div>Opss...</div>} />
      <Tile.Ancestor fallbackUI={<div>Opss...</div>} />
      <Tile.Child fallbackUI={<div>Opss...</div>} />
      <Tile.Child.Box fallbackUI={<div>Opss...</div>} />
      <Tile.Child.Notification fallbackUI={<div>Opss...</div>} />
      <Title fallbackUI={<div>Opss...</div>} />
      <Ul fallbackUI={<div>Opss...</div>} />
      <U fallbackUI={<div>Opss...</div>} />
    </>
  )
}
