package com.test.msapi.controller;

import com.test.msapi.service.ResultService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@RunWith(MockitoJUnitRunner.class)
public class ResultControllerTest {


    private static final String RESULTS = "[" +
            "{\"localDateTime\":\"2019-04-26T16:24:06.599\",\"value\":\"74154cf1-20c2-4826-aa8f-598f30d7aea0\"}," +
            "{\"localDateTime\":\"2019-04-26T16:24:07.601\",\"value\":\"aea4c6d2-8bc0-4145-8b28-e84d5df8879a\"}," +
            "{\"localDateTime\":\"2019-04-26T16:24:08.603\",\"value\":\"996cf9d6-daf6-4c89-86ee-18ccef16a5d5\"}," +
            "{\"localDateTime\":\"2019-04-26T16:24:09.605\",\"value\":\"1f856185-6fa2-4426-a20c-694c075b57a4\"}]";

    private MockMvc mvc;

    @Mock
    private ResultService resultService;

    @InjectMocks
    private ResultController resultController;

    @Before
    public void setUp() {
        mvc = MockMvcBuilders.standaloneSetup(resultController).build();
    }

    @Test
    public void testCorrectExecution() throws Exception {
        given(resultService.getResults()).willReturn(RESULTS);

        MockHttpServletResponse response = mvc.perform(get("/results")).andReturn().getResponse();
        String result = response.getContentAsString();

        assertEquals(RESULTS, result);
    }
}