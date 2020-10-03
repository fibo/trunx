import React, { useState } from "react";

import Code from "../components/Code.js";
import Nav from "../components/Nav.js";

import indent from "../utils/indent.js";

import {
  Button,
  Modal,
  Container,
  Delete,
  Content,
  Section,
  Subtitle,
  Title, 
  Level
} from "../../../index.js";

export default function ComponentsModal({ location: { pathname } }) {
  const [isBasicModalActive, setIsBasicModalActive] = useState(false);
  const [isImageModalActive, setIsImageModalActive] = useState(false);
  const [isCardModalActive, setIsCardModalActive] = useState(false);

  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>Modal</Title>

            <Subtitle>
              A classic <b>modal</b> overlay, in which you can include any
              content you want.
            </Subtitle>

            <hr />

            <p>
              The modal structure is very simple, each component and
              sub-components can take in a <code>className</code> prop to modify
              the class:
            </p>
            <ul>
              <li>
                <code>Modal</code>: the <b>main</b> container. Uses an{" "}
                <code>isActive</code> prop to toggle the modal on and off as a
                boolean state.
                <ul>
                  <li>
                    <code>Modal.Background</code>: A transparent overlay that
                    can act as a click target to close the modal. Uses an{" "}
                    <code>onClick</code> prop to to assign an optional on click
                    handler.
                  </li>
                  <li>
                    <code>Modal.Content</code>: A horizontally and vertically
                    centered container, with a maximum width of 640px, in which
                    you can include <em>any</em> content
                  </li>
                  <li>
                    <code>Modal.Close</code>: A simple cross located in the top
                    right corner. Uses an <code>onClick</code> prop to to assign
                    an on click handler and an <code>isLarge</code> prop to
                    define if the close button should use Bulma's{" "}
                    <code>is-large</code>.
                  </li>
                </ul>
              </li>
            </ul>
          </Content>

          <Content>
            <Button
              onClick={() => setIsBasicModalActive(!isBasicModalActive)}
              isLarge={true}
              isPrimary={true}
            >
              Launch Example Modal
            </Button>
            <Modal isActive={isBasicModalActive}>
              <Modal.Background
                onClick={() => setIsBasicModalActive(!isBasicModalActive)}
              ></Modal.Background>
              <Modal.Close
                onClick={() => setIsBasicModalActive(!isBasicModalActive)}
                className="is-large"
              ></Modal.Close>
              <Modal.Content>
                <h1 style={{ color: "white" }}>
                  Hello this is some HTML content in a basic modal window.
                </h1>
              </Modal.Content>
            </Modal>
            <Code language="jsx">
              {indent`
            <Modal isActive={isBasicModalActive}>
              <Modal.Background
                onClick={() => setIsBasicModalActive(!isBasicModalActive)}
              ></Modal.Background>
              <Modal.Close
                onClick={() => setIsBasicModalActive(!isBasicModalActive)}
                className="is-large"
              ></Modal.Close>
              <Modal.Content>
                <h1 style={{ color: "white" }}>
                  Hello this is some HTML content in a basic modal window.
                </h1>
              </Modal.Content>
            </Modal>
              `}
            </Code>
          </Content>
          <Title>Image Modal</Title>
          <Content>
            <p>
              Because a modal can contain <b>anything you want</b>, you can very
              simply use it to build an image gallery for example.
            </p>
          </Content>
          <Content>
            <Button
              onClick={() => setIsImageModalActive(!isImageModalActive)}
              isLarge={true}
              isPrimary={true}
            >
              Launch Image Modal
            </Button>
            <Modal isActive={isImageModalActive}>
              <Modal.Background
                onClick={() => setIsImageModalActive(!isImageModalActive)}
              ></Modal.Background>
              <Modal.Close
                onClick={() => setIsImageModalActive(!isImageModalActive)}
                className="is-large"
              ></Modal.Close>
              <Modal.Content>
                <img src="../assets/trunx-logotype-white.png" />
              </Modal.Content>
            </Modal>
            <Code language="jsx">
              {indent`
            <Modal isActive={isImageModalActive}>
              <Modal.Background
                onClick={() => setIsImageModalActive(!isImageModalActive)}
              ></Modal.Background>
              <Modal.Close
                onClick={() => setIsImageModalActive(!isImageModalActive)}
                className="is-large"
              ></Modal.Close>
              <Modal.Content>
                <img src="../assets/trunx-logotype-white.png" />
              </Modal.Content>
            </Modal>
              `}
            </Code>
          </Content>
          <Title>Modal Card</Title>
          <Content>
            <p>
              If you want a more classic modal, with a <strong>head</strong>, a{" "}
              <strong>body</strong> and a <strong>foot</strong>, use the{" "}
              <code>ModalCard</code>.
            </p>
          </Content>
          <Content>
            <Button
              isLarge
              isPrimary
              onClick={() => setIsCardModalActive(!isCardModalActive)}
            >
              Launch example modal
            </Button>

            <Modal isActive={isCardModalActive}>
              <Modal.Background
                onClick={() => setIsCardModalActive(!isCardModalActive)}
              />

              <Modal.Card>
                <Modal.Card.Head>
                  <Level>
                    <Level.Left>
                      <Level.Item>
                        <Modal.Card.Title>Modal Title</Modal.Card.Title>
                      </Level.Item>
                    </Level.Left>
                    <Level.Right>
                      <Level.Item>
                        <Delete
                          onClick={() =>
                            setIsCardModalActive(!isCardModalActive)
                          }
                        />
                      </Level.Item>
                    </Level.Right>
                  </Level>
                </Modal.Card.Head>
                <Modal.Card.Body>
                  <Content>
                    <h1>Hello World</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla accumsan, metus ultrices eleifend gravida, nulla
                      nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
                      vulputate semper dui. Fusce erat odio, sollicitudin vel
                      erat vel, interdum mattis neque.
                    </p>
                    <h2>Second level</h2>
                    <p>
                      Curabitur accumsan turpis pharetra{" "}
                      <strong>augue tincidunt</strong> blandit. Quisque
                      condimentum maximus mi, sit amet commodo arcu rutrum id.
                      Proin pretium urna vel cursus venenatis. Suspendisse
                      potenti. Etiam mattis sem rhoncus lacus dapibus facilisis.
                      Donec at dignissim dui. Ut et neque nisl.
                    </p>
                    <ul>
                      <li>
                        In fermentum leo eu lectus mollis, quis dictum mi
                        aliquet.
                      </li>
                      <li>
                        Morbi eu nulla lobortis, lobortis est in, fringilla
                        felis.
                      </li>
                      <li>
                        Aliquam nec felis in sapien venenatis viverra fermentum
                        nec lectus.
                      </li>
                      <li>Ut non enim metus.</li>
                    </ul>
                    <h3>Third level</h3>
                    <p>
                      Quisque ante lacus, malesuada ac auctor vitae, congue{" "}
                      <a href="#">non ante</a>. Phasellus lacus ex, semper ac
                      tortor nec, fringilla condimentum orci. Fusce eu rutrum
                      tellus.
                    </p>
                    <ol>
                      <li>Donec blandit a lorem id convallis.</li>
                      <li>Cras gravida arcu at diam gravida gravida.</li>
                      <li>Integer in volutpat libero.</li>
                      <li>Donec a diam tellus.</li>
                      <li>Aenean nec tortor orci.</li>
                      <li>
                        Quisque aliquam cursus urna, non bibendum massa viverra
                        eget.
                      </li>
                      <li>Vivamus maximus ultricies pulvinar.</li>
                    </ol>
                    <blockquote>
                      Ut venenatis, nisl scelerisque sollicitudin fermentum,
                      quam libero hendrerit ipsum, ut blandit est tellus sit
                      amet turpis.
                    </blockquote>
                    <p>
                      Quisque at semper enim, eu hendrerit odio. Etiam auctor
                      nisl et <em>justo sodales</em> elementum. Maecenas
                      ultrices lacus quis neque consectetur, et lobortis nisi
                      molestie.
                    </p>
                    <p>
                      Sed sagittis enim ac tortor maximus rutrum. Nulla
                      facilisi. Donec mattis vulputate risus in luctus. Maecenas
                      vestibulum interdum commodo.
                    </p>
                    <p>
                      Suspendisse egestas sapien non felis placerat elementum.
                      Morbi tortor nisl, suscipit sed mi sit amet, mollis
                      malesuada nulla. Nulla facilisi. Nullam ac erat ante.
                    </p>
                    <h4>Fourth level</h4>
                    <p>
                      Nulla efficitur eleifend nisi, sit amet bibendum sapien
                      fringilla ac. Mauris euismod metus a tellus laoreet, at
                      elementum ex efficitur.
                    </p>
                    <p>
                      Maecenas eleifend sollicitudin dui, faucibus sollicitudin
                      augue cursus non. Ut finibus eleifend arcu ut vehicula.
                      Mauris eu est maximus est porta condimentum in eu justo.
                      Nulla id iaculis sapien.
                    </p>
                    <p>
                      Phasellus porttitor enim id metus volutpat ultricies. Ut
                      nisi nunc, blandit sed dapibus at, vestibulum in felis.
                      Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum
                      efficitur ligula sit amet ullamcorper. Etiam tristique,
                      leo vitae porta faucibus, mi lacus laoreet metus, at
                      cursus leo est vel tellus. Sed ac posuere est. Nunc
                      ultricies nunc neque, vitae ultricies ex sodales quis.
                      Aliquam eu nibh in libero accumsan pulvinar. Nullam nec
                      nisl placerat, pretium metus vel, euismod ipsum. Proin
                      tempor cursus nisl vel condimentum. Nam pharetra varius
                      metus non pellentesque.
                    </p>
                    <h5>Fifth level</h5>
                    <p>
                      Aliquam sagittis rhoncus vulputate. Cras non luctus sem,
                      sed tincidunt ligula. Vestibulum at nunc elit. Praesent
                      aliquet ligula mi, in luctus elit volutpat porta.
                      Phasellus molestie diam vel nisi sodales, a eleifend augue
                      laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.
                    </p>
                    <h6>Sixth level</h6>
                    <p>
                      Cras in nibh lacinia, venenatis nisi et, auctor urna.
                      Donec pulvinar lacus sed diam dignissim, ut eleifend eros
                      accumsan. Phasellus non tortor eros. Ut sed rutrum lacus.
                      Etiam purus nunc, scelerisque quis enim vitae, malesuada
                      ultrices turpis. Nunc vitae maximus purus, nec consectetur
                      dui. Suspendisse euismod, elit vel rutrum commodo, ipsum
                      tortor maximus dui, sed varius sapien odio vitae est.
                      Etiam at cursus metus.
                    </p>
                  </Content>
                </Modal.Card.Body>
                <Modal.Card.Foot>
                  <Button
                    onClick={() => setIsCardModalActive(!isCardModalActive)}
                  >
                    Cancel
                  </Button>
                  <Button
                    isSuccess
                    onClick={() => setIsCardModalActive(!isCardModalActive)}
                  >
                    Save Changes
                  </Button>
                </Modal.Card.Foot>
              </Modal.Card>
            </Modal>
            <Code language="jsx">
              {indent`
            <Modal isActive={isCardModalActive}>
              <Modal.Background
                onClick={() => setIsCardModalActive(!isCardModalActive)}
              />

              <Modal.Card>
                <Modal.Card.Head>
                  <Level>
                    <Level.Left>
                      <Level.Item>
                        <Modal.Card.Title>Modal Title</Modal.Card.Title>
                      </Level.Item>
                    </Level.Left>
                    <Level.Right>
                      <Level.Item>
                        <Delete
                          onClick={() =>
                            setIsCardModalActive(!isCardModalActive)
                          }
                        />
                      </Level.Item>
                    </Level.Right>
                  </Level>
                </Modal.Card.Head>
                <Modal.Card.Body>
                  <Content>
                  <!-- Modal Content in here -->
                  </Content>
                </Modal.Card.Body>
                <Modal.Card.Foot>
                  <Button
                    onClick={() => setIsCardModalActive(!isCardModalActive)}
                  >
                    Cancel
                  </Button>
                  <Button
                    isSuccess
                    onClick={() => setIsCardModalActive(!isCardModalActive)}
                  >
                    Save Changes
                  </Button>
                </Modal.Card.Foot>
              </Modal.Card>
            </Modal>
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  );
}
