import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GridFill, ViewList } from 'react-bootstrap-icons';

import Pagination from './../../components/Pagination';
import ModalEdit from './../../components/Phones/ModalEdit';
import CardPhone from './../../components/Phones/CardPhone';
import { Container, Card, CardsList } from './styles';

import Repository from './../../services/repository';
import * as PhonesActions from './../../store/modules/phones/actions';

export default function Home() {
  const api = new Repository();
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phones);
  const [mode, setMode] = useState('gallery');
  const [currentPhone, setCurrentPhone] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const [loading, setLoaing] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 800,
  });

  const dummyData = () => {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({ id: i });
    }

    dispatch(PhonesActions.setPhones(data));
  };

  const getPhones = async ({ page, limit }) => {
    setLoaing(true);
    const response = await api.getPhones(page, limit);

    if (!response.data) return;

    dummyData();
    setTimeout(() => {
      setLoaing(false);
      dispatch(PhonesActions.setPhones(response.data));
    }, 1500);
  };

  const changeMode = () => setMode(mode === 'list' ? 'gallery' : 'list');

  const handlePagination = async (newPagination) => {
    await setPagination(newPagination);

    getPhones(newPagination);
  };

  useEffect(() => {
    getPhones(pagination);
  }, []);

  const openModal = (value, id, status) => {
    setCurrentPhone({ value, id, status });
    setModalEdit(true);
  };

  const editPhoneStatus = async (status, id) => {
    setModalEdit(false);
    setCurrentPhone({});
    const response = await api.editPhoneStatus(id, {
      isActive: Number(status),
    });

    dispatch(PhonesActions.changeStatusPhone(response.data));
  };

  return (
    <>
      <Container>
        <div className="container-mode">
          <ViewList
            className="icon-mode"
            size={25}
            style={{ marginRight: 5 }}
            color={mode === 'list' ? '#64acfb' : ''}
            onClick={() => changeMode()}
          />
          <GridFill
            className="icon-mode"
            size={25}
            color={mode === 'gallery' ? '#64acfb' : ''}
            onClick={() => changeMode()}
          />
        </div>

        <CardsList mode={mode}>
          {phones.map((phone) => (
            <Card mode={mode} key={phone.id}>
              <CardPhone
                openModal={(value, id, status) => openModal(value, id, status)}
                loading={loading}
                mode={mode}
                {...phone}
              />
            </Card>
          ))}
        </CardsList>
        <div className="container-pagination">
          {phones.length > 0 && (
            <Pagination
              pagination={pagination}
              changePagination={(newPagination) =>
                handlePagination(newPagination)
              }
            />
          )}
        </div>
      </Container>
      <ModalEdit
        show={modalEdit}
        phone={currentPhone}
        close={() => setModalEdit(false)}
        save={(status, id) => editPhoneStatus(status, id)}
      />
    </>
  );
}
