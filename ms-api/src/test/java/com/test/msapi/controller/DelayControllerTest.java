package com.test.msapi.controller;

import com.test.msapi.service.MessageService;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@RunWith(MockitoJUnitRunner.class)
public class DelayControllerTest {

    private MockMvc mvc;

    @Mock
    private MessageService messageService;

    @InjectMocks
    private DelayController delayController;

    @Before
    public void setUp() {
        mvc = MockMvcBuilders.standaloneSetup(delayController).build();
    }

    @Test
    public void testCorrectExecution() throws Exception {
        given(messageService.sendChangeFrequencyRequest("1000")).willReturn("1000");

        MockHttpServletResponse response = mvc.perform(post("/changeDelay/1000")).andReturn().getResponse();

        String contentAsString = response.getContentAsString();
        assertEquals("1000", contentAsString);
    }
}