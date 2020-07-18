import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Pagination from './../../components/Pagination';
import CardPhone from './../../components/Phones/CardPhone';
import { Container, Card, CardsList } from './styles';

import Repository from './../../services/repository';
import * as PhonesActions from './../../store/modules/phones/actions';

export default function Home() {
  const api = new Repository();
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phones);
  const [mode, setMode] = useState('list');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 800,
  });

  const getPhones = async () => {
    const response = await api.getPhones(pagination.page, pagination.limit);

    dispatch(PhonesActions.setPhones(response.data));
  };

  const changeMode = () => setMode(mode === 'list' ? 'gallery' : 'list');

  const handlePagination = (newPagination) => {
    setPagination(newPagination);

    getPhones();
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <Container>
      <div className="container-mode">
        <button onClick={() => changeMode()}>{mode}</button>
      </div>

      <CardsList mode={mode}>
        {phones.map((phone) => (
          <Card key={phone.id}>
            <div className="content">
              <CardPhone {...phone} />
            </div>
          </Card>
        ))}
      </CardsList>
      <div className="container-pagination">
        <Pagination
          pagination={pagination}
          changePagination={(newPagination) => handlePagination(newPagination)}
        />
      </div>
    </Container>
  );
}
